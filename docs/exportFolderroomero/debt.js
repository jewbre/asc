/**
 * @api {POST} http://localhost/asc/backend/web/api/debt/clear debt/clear
 * @apiName POST/debt/clear
 * @apiGroup debt
 * @apiDescription Send list of ids for which to clear debt.

Return is whole list of debts.
 *
 *
 * @apiHeader Authorization: Bearer  VeXnOTNog70h2yjla8coXTIuKq-8eK5e
Content-Type: application/x-www-form-urlencoded

 * 
 * @apiParam {text} participants[] "2"
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
 * @api {GET} http://localhost/asc/backend/web/api/debt debt
 * @apiName GET/debt
 * @apiGroup debt
 * @apiDescription List of debts for current user.

Current user will get that much from other user (positive - gets money, negative: loses money)
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
 */