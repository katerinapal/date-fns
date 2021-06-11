import { buildDistanceInWordsLocale as index_buildDistanceInWordsLocale } from "./build_distance_in_words_locale/index.js";
import { buildFormatLocale as index_buildFormatLocale } from "./build_format_locale/index.js";

/**
 * @category Locales
 * @summary Polish locale.
 * @author Mateusz Derks [@ertrzyiks]{@link https://github.com/ertrzyiks}
 * @author Just RAG [@justrag]{@link https://github.com/justrag}
 */
mod_indexjs = {
  distanceInWords: index_buildDistanceInWordsLocale(),
  format: index_buildFormatLocale()
}
var mod_indexjs;
export { mod_indexjs as indexjs };
