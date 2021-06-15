import { buildDistanceInWordsLocale as index_buildDistanceInWordsLocale } from "./build_distance_in_words_locale/index.js";
import { buildFormatLocale as index_buildFormatLocale } from "./build_format_locale/index.js";

/**
 * @category Locales
 * @summary Chinese Simplified locale.
 * @author Changyu Geng [@KingMario]{@link https://github.com/KingMario}
 * @author Song Shuoyun [@fnlctrl]{@link https://github.com/fnlctrl}
 */
mod_indexjs = {
  distanceInWords: index_buildDistanceInWordsLocale(),
  format: index_buildFormatLocale()
}
var mod_indexjs;
export { mod_indexjs as indexjs };
