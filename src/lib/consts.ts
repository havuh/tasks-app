/**
 * Error response status
 */
export const UNAUTHORIZED = 401

export const FORBIDDEN = 403

export const NOT_FOUND = 404

export const INTERNAL_SERVER_ERROR = 500

export const BAD_REQUEST = 400

export const METHOD_NOT_ALLOWED = 405

/**
 * Regex constants
 */
export const NUMERIC = 'numeric'

export const ALPHANUMERIC = 'alphanumeric'

export const NUMERIC_REGEX = /^[0-9]+$/

export const DECIMAL_REGEX = /^[0-9]+(\.[0-9]{1,2})?$/

export const ALFA_NUMERIC_REGEX = /^[a-zA-Z0-9]+$/

export const ALPHABETIC_REGEX =
  /^[a-zA-ZÀÁÂÃÄÅÇÈÉÊËÌÍÎÏÒÓÔÕÖßÙÚÛÜÝŸÑàáâãäåçèéêëìíîïðòóôõöùúûüýÿñ\s]+$/

export const MIN_LENGTH_REQUIRED = 1

export const ALLOWED_KEYS = ['Backspace', 'Delete', 'Enter', 'Tab', 'ArrowLeft', 'ArrowRight']

/**
 * UI constants
 */
export const DEFAULT_PAGE_INDEX = 0

export const DEFAULT_PAGE_SIZE = 50

export const DEFAULT_DATE_FORMAT = 'yyyy-MM-dd'

export const DEFAULT_DATE_PICKER_FORMAT = 'dd/MM/yyyy'

/**
 * Message constants
 */
export const DEFAULT_TITLE = '¡Opps!'

export const DEFAULT_MESSAGE = 'Ha ocurrido un incidente, por favor intente nuevamente.'

export const FORM_ERROR_MESSAGE = '¡Por favor, revise los campos requeridos!'

export const SESSION_EXPIRED_MESSAGE = 'Su sesión ha caducado, por favor inicie sesión nuevamente.'

/**
 * Default image blur data url
 * @see https://png-pixel.com/
 */
export const BLUR_DATA_URL =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN88vr5fwAJKAO32Y+nDwAAAABJRU5ErkJggg=='

/**
 * Incremental Static Regeneration (ISR) - revalidate time in seconds
 * @see {@link https://nextjs.org/docs/pages/building-your-application/data-fetching/incremental-static-regeneration}
 */
export const ISR_REVALIDATE_TIME = 60
