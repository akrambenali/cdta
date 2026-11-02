/**
 * Minimal Arabic shaper for Satori (next/og), which mis-measures contextual Arabic glyphs
 * and has no bidi support. Letters are converted to their Unicode presentation forms and
 * each word is emitted in visual (left-to-right) order.
 */

type Forms = [isolated: number, final: number, initial?: number, medial?: number];

const FORMS: Record<number, Forms> = {
  0x0622: [0xfe81, 0xfe82],
  0x0623: [0xfe83, 0xfe84],
  0x0624: [0xfe85, 0xfe86],
  0x0625: [0xfe87, 0xfe88],
  0x0626: [0xfe89, 0xfe8a, 0xfe8b, 0xfe8c],
  0x0627: [0xfe8d, 0xfe8e],
  0x0628: [0xfe8f, 0xfe90, 0xfe91, 0xfe92],
  0x0629: [0xfe93, 0xfe94],
  0x062a: [0xfe95, 0xfe96, 0xfe97, 0xfe98],
  0x062b: [0xfe99, 0xfe9a, 0xfe9b, 0xfe9c],
  0x062c: [0xfe9d, 0xfe9e, 0xfe9f, 0xfea0],
  0x062d: [0xfea1, 0xfea2, 0xfea3, 0xfea4],
  0x062e: [0xfea5, 0xfea6, 0xfea7, 0xfea8],
  0x062f: [0xfea9, 0xfeaa],
  0x0630: [0xfeab, 0xfeac],
  0x0631: [0xfead, 0xfeae],
  0x0632: [0xfeaf, 0xfeb0],
  0x0633: [0xfeb1, 0xfeb2, 0xfeb3, 0xfeb4],
  0x0634: [0xfeb5, 0xfeb6, 0xfeb7, 0xfeb8],
  0x0635: [0xfeb9, 0xfeba, 0xfebb, 0xfebc],
  0x0636: [0xfebd, 0xfebe, 0xfebf, 0xfec0],
  0x0637: [0xfec1, 0xfec2, 0xfec3, 0xfec4],
  0x0638: [0xfec5, 0xfec6, 0xfec7, 0xfec8],
  0x0639: [0xfec9, 0xfeca, 0xfecb, 0xfecc],
  0x063a: [0xfecd, 0xfece, 0xfecf, 0xfed0],
  0x0641: [0xfed1, 0xfed2, 0xfed3, 0xfed4],
  0x0642: [0xfed5, 0xfed6, 0xfed7, 0xfed8],
  0x0643: [0xfed9, 0xfeda, 0xfedb, 0xfedc],
  0x0644: [0xfedd, 0xfede, 0xfedf, 0xfee0],
  0x0645: [0xfee1, 0xfee2, 0xfee3, 0xfee4],
  0x0646: [0xfee5, 0xfee6, 0xfee7, 0xfee8],
  0x0647: [0xfee9, 0xfeea, 0xfeeb, 0xfeec],
  0x0648: [0xfeed, 0xfeee],
  0x0649: [0xfeef, 0xfef0],
  0x064a: [0xfef1, 0xfef2, 0xfef3, 0xfef4],
};

/** Lam + alef variant → [isolated, final] ligature. */
const LAM_ALEF: Record<number, [number, number]> = {
  0x0622: [0xfef5, 0xfef6],
  0x0623: [0xfef7, 0xfef8],
  0x0625: [0xfef9, 0xfefa],
  0x0627: [0xfefb, 0xfefc],
};

const LAM = 0x0644;
const TATWEEL = 0x0640;
const TASHKEEL = /[ً-ْٰ]/g;
const ARABIC = /[؀-ۿ]/;
const STRONG_LTR = /[A-Za-z0-9À-ɏ]/;

const joinsNext = (cp: number) => cp === TATWEEL || (FORMS[cp]?.length ?? 0) === 4;
const joinsPrev = (cp: number) => cp === TATWEEL || cp in FORMS;

function shapeWord(word: string): string[] {
  const cps = Array.from(word.replace(TASHKEEL, ""), (ch) => ch.codePointAt(0)!);
  const out: number[] = [];

  for (let i = 0; i < cps.length; i++) {
    const cp = cps[i];
    const prev = cps[i - 1];
    const connectsPrev = prev !== undefined && joinsNext(prev) && joinsPrev(cp);

    const ligature = cp === LAM ? LAM_ALEF[cps[i + 1]] : undefined;
    if (ligature) {
      out.push(connectsPrev ? ligature[1] : ligature[0]);
      i++;
      continue;
    }

    const forms = FORMS[cp];
    if (!forms) {
      out.push(cp);
      continue;
    }
    const next = cps[i + 1];
    const connectsNext = next !== undefined && joinsNext(cp) && joinsPrev(next);
    if (connectsPrev && connectsNext) out.push(forms[3]!);
    else if (connectsPrev) out.push(forms[1]);
    else if (connectsNext) out.push(forms[2]!);
    // Fonts often lack isolated presentation forms; the base letter renders identically.
    else out.push(cp);
  }

  // Base letters stay in their own chunk so Satori's shaper can't re-join them in visual order.
  const chunks: string[] = [];
  for (const cp of out.reverse()) {
    const isPresentationForm = cp >= 0xfe70;
    const last = chunks.length - 1;
    if (isPresentationForm && last >= 0 && chunks[last].codePointAt(0)! >= 0xfe70) chunks[last] += String.fromCodePoint(cp);
    else chunks.push(String.fromCodePoint(cp));
  }
  return chunks;
}

/**
 * Splits RTL text into words, rightmost first; each word is a list of chunks in visual order.
 * Arabic words are shaped and reversed; consecutive non-Arabic words (e.g. "TAPSIT School")
 * stay grouped in reading order.
 */
export function rtlSegments(text: string): string[][] {
  const segments: string[][] = [];
  let latinRun: string[] = [];
  const flush = () => {
    if (latinRun.length) segments.push([latinRun.join(" ")]);
    latinRun = [];
  };
  for (const word of text.split(/\s+/).filter(Boolean)) {
    if (ARABIC.test(word)) {
      flush();
      segments.push(shapeWord(word));
    } else if (STRONG_LTR.test(word)) {
      latinRun.push(word);
    } else {
      // Neutral punctuation (e.g. "—") follows the RTL paragraph direction.
      flush();
      segments.push([word]);
    }
  }
  flush();
  return segments;
}
