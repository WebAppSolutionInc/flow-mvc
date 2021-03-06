/**
 * Contains references to the success and failure methods of an object making a service call.
 * It also contains a reference to the object using the Responder (which has the success and failure methods).
 */
Ext.define("FlowMVC.mvc.service.rpc.Responder", {

    statics: {

	    /**
	     * @property {FlowMVC.logger.Logger} logger The logger for the object.
	     * @static
	     */
        logger: FlowMVC.logger.Logger.getLogger("FlowMVC.mvc.service.rpc.Responder"),

        /**
         * @property {String} ERROR_SUCCESS_MUST_BE_VALID_FUNCTION An error string indicating that the constructor success parameter
         * cannot be be null or an not a function.
         * @static
         */
        ERROR_SUCCESS_MUST_BE_VALID_FUNCTION: "The constructor parameter 'success' cannot be null or not a function.",

        /**
         * @property {String} ERROR_FAILURE_MUST_BE_VALID_FUNCTION An error string indicating that the constructor failure parameter
         * cannot be be null or an not a function.
         * @static
         */
        ERROR_FAILURE_MUST_BE_VALID_FUNCTION: "The constructor parameter 'failure' cannot be null or not a function.",

        /**
         * @property {String} ERROR_SCOPE_MUST_BE_NON_NULL An error string indicating that the constructor scope parameter
         * cannot be be null.
         * @static
         */
        ERROR_SCOPE_MUST_BE_VALID_OBJECT: "The constructor parameter 'scope' cannot be null or not an object"
    },

	/**
	 * @property {Function} success Reference to a method that handles a successful service.
	 */
	success:    null,

	/**
	 * @property {Function} failure Reference to a method that handles a failed service.
	 */
	failure:    null,

	/**
	 * @property {Object} scope Reference to the object that has the success and failure handler methods.
	 */
	scope:      null,

    /**
     * The constructor creates a Responder object with a success and failure method reference, as well as
     * scope reference to the object that creates it.
     *
     * @param {Function} success Reference to a method that handles a successful service.
     * @param {Function} failure Reference to a method that handles a failed service.
     * @param {Object} scope Reference to the object that has the success and failure handler methods.
     */
    constructor: function(success, failure, scope)
    {
        if( (success == null) || (typeof(success) !== "function") ) {
            Ext.Error.raise({
                msg: FlowMVC.mvc.service.rpc.Responder.ERROR_SUCCESS_MUST_BE_VALID_FUNCTION
            });
        }
        if( (failure == null) || (typeof(failure) !== "function") ) {
            Ext.Error.raise({
                msg: FlowMVC.mvc.service.rpc.Responder.ERROR_FAILURE_MUST_BE_VALID_FUNCTION
            });
        }
        if( (success == null) || (typeof(scope) !== "object") ) {
            Ext.Error.raise({
                msg: FlowMVC.mvc.service.rpc.Responder.ERROR_SCOPE_MUST_BE_VALID_OBJECT
            });
        }
	    FlowMVC.mvc.service.rpc.Responder.logger.debug("constructor");

        this.success = success;
        this.failure = failure;
        this.scope = scope;
    }

});

