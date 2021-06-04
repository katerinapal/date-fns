import { buildDistanceInWordsLocale as index_buildDistanceInWordsLocale } from "./build_distance_in_words_locale/index.js";
import { buildFormatLocale as index_buildFormatLocale } from "./build_format_locale/index.js";

/**
 * @category Locales
 * @summary French locale.
 * @author Jean Dupouy [@izeau]{@link https://github.com/izeau}
 * @author François B [@fbonzon]{@link https://github.com/fbonzon}
 */
mod_indexjs = {
  distanceInWords: index_buildDistanceInWordsLocale(),
  format: index_buildFormatLocale()
}
var mod_indexjs;
export { mod_indexjs as indexjs };
