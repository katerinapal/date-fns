import { buildDistanceInWordsLocale as index_buildDistanceInWordsLocale } from "./build_distance_in_words_locale/index.js";
import { buildFormatLocale as index_buildFormatLocale } from "./build_format_locale/index.js";

/**
 * @category Locales
 * @summary Dutch locale.
 * @author Jorik Tangelder [@jtangelder]{@link https://github.com/jtangelder}
 * @author Ruben Stolk [@rubenstolk]{@link https://github.com/rubenstolk}
 */
mod_indexjs = {
  distanceInWords: index_buildDistanceInWordsLocale(),
  format: index_buildFormatLocale()
}
var mod_indexjs;
export { mod_indexjs as indexjs };
