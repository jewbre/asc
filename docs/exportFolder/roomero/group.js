/**
 * @api {POST} http://localhost/asc/backend/web/api/group/create group/create
 * @apiName POST/group/create
 * @apiGroup group
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
 * {"id":10,"name":null,"members":[{"id":1,"username":"vilim.stubican","avatar":"https://www.gravatar.com/avatar/4278fd4c1c4a0e333aaa7282eab08344"}],"currency":{"id":1,"name":"Hrvatska kuna","code":"HRK","shortcode":"kn"}}
 *
 *
 *//**
 * @api {POST} http://localhost/asc/backend/web/api/group/create group/members
 * @apiName POST/group/members
 * @apiGroup group
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
 * {"id":9,"name":null,"members":[{"id":1,"username":"vilim.stubican","avatar":"https://www.gravatar.com/avatar/4278fd4c1c4a0e333aaa7282eab08344"}],"currency":{"id":1,"name":"Hrvatska kuna","code":"HRK","shortcode":"kn"}}
 *
 *
 *//**
 * @api {POST} http://localhost/asc/backend/web/api/group/select group/select
 * @apiName POST/group/select
 * @apiGroup group
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
 * {"id":1,"name":"PersonalGroup","members":[{"id":1,"username":"vilim.stubican","avatar":"https://www.gravatar.com/avatar/4278fd4c1c4a0e333aaa7282eab08344"},{"id":2,"username":"vilim.stubican.gmail","avatar":"https://www.gravatar.com/avatar/4278fd4c1c4a0e333aaa7282eab08344"}],"currency":{"id":1,"name":"Hrvatska kuna","code":"HRK","shortcode":"kn"}}
 *
 *
 * @apiErrorExample {json} Error Response Example:
 *
 * {}
 *
 *
 */