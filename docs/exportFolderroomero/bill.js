/**
 * @api {POST} http://localhost/asc/backend/web/api/group/create group/create
 * @apiName POST/group/create
 * @apiGroup bill
 * @apiDescription Create new group
 *
 *
 * @apiHeader Authorization: Bearer  VeXnOTNog70h2yjla8coXTIuKq-8eK5e
Content-Type: application/json

 * 
 ...
 *
 * @apiSuccess {Bool} success true
 * @apiSuccess {Number} code Response code
 * @apiSuccess {Array} error Empty array
 * @apiSuccess {Object} data object
 *
 * @apiError (xxx) {Bool} success false
 * @apiError (xxx) {Number} code Response code
 * @apiError (xxx) {Array} error key value array of errors
 * @apiError (xxx) {Object} data empty object
 *
 * @apiError (404) {NotFound} 404 Not found.
 * @apiError (405) {MethodNotAllowed} 405 When accessing method that's not allowed
 *
 * @apiSuccessExample {json} Success Response Example
 * {}
 *
 *
 * @apiErrorExample {json} Error Response Example:
 *
 * {}
 *
 *
 *//**
 * @api {GET} http://localhost/asc/backend/web/api/bill bill
 * @apiName GET/bill
 * @apiGroup bill
 * @apiDescription List of bills
 *
 *
 * @apiHeader Authorization: Bearer  VeXnOTNog70h2yjla8coXTIuKq-8eK5e
Content-Type: application/x-www-form-urlencoded

 * 
 * @apiParam {text} amount "200"
 *
 * @apiSuccess {Bool} success true
 * @apiSuccess {Number} code Response code
 * @apiSuccess {Array} error Empty array
 * @apiSuccess {Object} data object
 *
 * @apiError (xxx) {Bool} success false
 * @apiError (xxx) {Number} code Response code
 * @apiError (xxx) {Array} error key value array of errors
 * @apiError (xxx) {Object} data empty object
 *
 * @apiError (404) {NotFound} 404 Not found.
 * @apiError (405) {MethodNotAllowed} 405 When accessing method that's not allowed
 *
 * @apiSuccessExample {json} Success Response Example
 * {}
 *
 *
 * @apiErrorExample {json} Error Response Example:
 *
 * {}
 *
 *
 *//**
 * @api {POST} http://localhost/asc/backend/web/api/group/create group/members
 * @apiName POST/group/members
 * @apiGroup bill
 * @apiDescription List of members in currently selected group
 *
 *
 * @apiHeader Authorization: Bearer  VeXnOTNog70h2yjla8coXTIuKq-8eK5e
Content-Type: application/json

 * 
 ...
 *
 * @apiSuccess {Bool} success true
 * @apiSuccess {Number} code Response code
 * @apiSuccess {Array} error Empty array
 * @apiSuccess {Object} data object
 *
 * @apiError (xxx) {Bool} success false
 * @apiError (xxx) {Number} code Response code
 * @apiError (xxx) {Array} error key value array of errors
 * @apiError (xxx) {Object} data empty object
 *
 * @apiError (404) {NotFound} 404 Not found.
 * @apiError (405) {MethodNotAllowed} 405 When accessing method that's not allowed
 *
 * @apiSuccessExample {json} Success Response Example
 * {}
 *
 *
 * @apiErrorExample {json} Error Response Example:
 *
 * {}
 *
 *
 *//**
 * @api {PUT} http://localhost/asc/backend/web/api/bill/update?id=10 bill/update
 * @apiName PUT/bill/update
 * @apiGroup bill
 * @apiDescription Create new bill
Participants: array od ids
 *
 *
 * @apiHeader Authorization: Bearer  VeXnOTNog70h2yjla8coXTIuKq-8eK5e
Content-Type: application/x-www-form-urlencoded

 * 
 * @apiParam {text} category "1"
* @apiParam {text} amount "300"
* @apiParam {text} description "Opis"
* @apiParam {text} date "2017-05-02T22:00:00.000Z"
* @apiParam {text} payer "1"
* @apiParam {text} participants ""
 *
 * @apiSuccess {Bool} success true
 * @apiSuccess {Number} code Response code
 * @apiSuccess {Array} error Empty array
 * @apiSuccess {Object} data object
 *
 * @apiError (xxx) {Bool} success false
 * @apiError (xxx) {Number} code Response code
 * @apiError (xxx) {Array} error key value array of errors
 * @apiError (xxx) {Object} data empty object
 *
 * @apiError (404) {NotFound} 404 Not found.
 * @apiError (405) {MethodNotAllowed} 405 When accessing method that's not allowed
 *
 * @apiSuccessExample {json} Success Response Example
 * {}
 *
 *
 * @apiErrorExample {json} Error Response Example:
 *
 * {}
 *
 *
 *//**
 * @api {POST} http://localhost/asc/backend/web/api/bill/create bill/create
 * @apiName POST/bill/create
 * @apiGroup bill
 * @apiDescription Create new bill
Participants: array od ids
 *
 *
 * @apiHeader Authorization: Bearer  VeXnOTNog70h2yjla8coXTIuKq-8eK5e
Content-Type: application/x-www-form-urlencoded

 * 
 * @apiParam {text} category "1"
* @apiParam {text} amount "200"
* @apiParam {text} description "Opis"
* @apiParam {text} date "2017-05-02T22:00:00.000Z"
* @apiParam {text} payer "1"
* @apiParam {text} participants ""
 *
 * @apiSuccess {Bool} success true
 * @apiSuccess {Number} code Response code
 * @apiSuccess {Array} error Empty array
 * @apiSuccess {Object} data object
 *
 * @apiError (xxx) {Bool} success false
 * @apiError (xxx) {Number} code Response code
 * @apiError (xxx) {Array} error key value array of errors
 * @apiError (xxx) {Object} data empty object
 *
 * @apiError (404) {NotFound} 404 Not found.
 * @apiError (405) {MethodNotAllowed} 405 When accessing method that's not allowed
 *
 * @apiSuccessExample {json} Success Response Example
 * {}
 *
 *
 * @apiErrorExample {json} Error Response Example:
 *
 * {}
 *
 *
 *//**
 * @api {POST} http://localhost/asc/backend/web/api/group/select group/select
 * @apiName POST/group/select
 * @apiGroup bill
 * @apiDescription Select new group
 *
 *
 * @apiHeader Authorization: Bearer  VeXnOTNog70h2yjla8coXTIuKq-8eK5e
Content-Type: application/x-www-form-urlencoded

 * 
 * @apiParam {text} id "1"
 *
 * @apiSuccess {Bool} success true
 * @apiSuccess {Number} code Response code
 * @apiSuccess {Array} error Empty array
 * @apiSuccess {Object} data object
 *
 * @apiError (xxx) {Bool} success false
 * @apiError (xxx) {Number} code Response code
 * @apiError (xxx) {Array} error key value array of errors
 * @apiError (xxx) {Object} data empty object
 *
 * @apiError (404) {NotFound} 404 Not found.
 * @apiError (405) {MethodNotAllowed} 405 When accessing method that's not allowed
 *
 * @apiSuccessExample {json} Success Response Example
 * {}
 *
 *
 * @apiErrorExample {json} Error Response Example:
 *
 * {}
 *
 *
 *//**
 * @api {GET} http://localhost/asc/backend/web/api/bill-category bill-category
 * @apiName GET/bill-category
 * @apiGroup bill
 * @apiDescription List of bill categories
 *
 *
 * @apiHeader Authorization: Bearer  VeXnOTNog70h2yjla8coXTIuKq-8eK5e
Content-Type: application/x-www-form-urlencoded

 * 
 * @apiParam {text} amount "200"
 *
 * @apiSuccess {Bool} success true
 * @apiSuccess {Number} code Response code
 * @apiSuccess {Array} error Empty array
 * @apiSuccess {Object} data object
 *
 * @apiError (xxx) {Bool} success false
 * @apiError (xxx) {Number} code Response code
 * @apiError (xxx) {Array} error key value array of errors
 * @apiError (xxx) {Object} data empty object
 *
 * @apiError (404) {NotFound} 404 Not found.
 * @apiError (405) {MethodNotAllowed} 405 When accessing method that's not allowed
 *
 * @apiSuccessExample {json} Success Response Example
 * {}
 *
 *
 * @apiErrorExample {json} Error Response Example:
 *
 * {}
 *
 *
 */