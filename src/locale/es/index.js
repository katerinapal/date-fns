import { buildDistanceInWordsLocale as index_buildDistanceInWordsLocale } from "./build_distance_in_words_locale/index.js";
import { buildFormatLocale as index_buildFormatLocale } from "./build_format_locale/index.js";

/**
 * @category Locales
 * @summary Spanish locale.
 * @author Juan Angosto [@juanangosto]{@link https://github.com/juanangosto}
 * @author Guillermo Grau [@guigrpa]{@link https://github.com/guigrpa}
 * @author Fernando Agüero [@fjaguero]{@link https://github.com/fjaguero}
 */
mod_indexjs = {
  distanceInWords: index_buildDistanceInWordsLocale(),
  format: index_buildFormatLocale()
}
var mod_indexjs;
export { mod_indexjs as indexjs };
