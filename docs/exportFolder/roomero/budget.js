/**
 * @api {GET} http://localhost/asc/backend/web/api/budget/mine budget/mine
 * @apiName GET/budget/mine
 * @apiGroup budget
 * @apiDescription Budget of mine group
 *
 *
 * @apiHeader Authorization: Bearer  VeXnOTNog70h2yjla8coXTIuKq-8eK5e
Content-Type: application/x-www-form-urlencoded

 * 
 * @apiParam {text} name "Nesto trece"
* @apiParam {text} category "1"
* @apiParam {text} details "400 g"
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
 * {"id":1,"amount":2187,"currency":{"id":1,"name":"Hrvatska kuna","code":"HRK","shortcode":"kn"},"group":{"id":1,"name":"PersonalGroup","members":[{"id":1,"username":"vilim.stubican","avatar":"https://www.gravatar.com/avatar/4278fd4c1c4a0e333aaa7282eab08344"},{"id":2,"username":"vilim.stubican.gmail","avatar":"https://www.gravatar.com/avatar/4278fd4c1c4a0e333aaa7282eab08344"}],"currency":{"id":1,"name":"Hrvatska kuna","code":"HRK","shortcode":"kn"}}}
 *
 *
 * @apiErrorExample {json} Error Response Example:
 *
 * {}
 *
 *
 *//**
 * @api {POST} http://localhost/asc/backend/web/api/budget/add budget/add
 * @apiName POST/budget/add
 * @apiGroup budget
 * @apiDescription Add to group budget
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
 * {"id":1,"amount":2387,"currency":{"id":1,"name":"Hrvatska kuna","code":"HRK","shortcode":"kn"},"group":{"id":1,"name":"PersonalGroup","members":[{"id":1,"username":"vilim.stubican","avatar":"https://www.gravatar.com/avatar/4278fd4c1c4a0e333aaa7282eab08344"},{"id":2,"username":"vilim.stubican.gmail","avatar":"https://www.gravatar.com/avatar/4278fd4c1c4a0e333aaa7282eab08344"}],"currency":{"id":1,"name":"Hrvatska kuna","code":"HRK","shortcode":"kn"}}}
 *
 *
 * @apiErrorExample {json} Error Response Example:
 *
 * {}
 *
 *
 */