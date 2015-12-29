'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = ibexReact;

var _nightingale = require('nightingale');

var _fody = require('fody');

/* global $document */

var logger = new _nightingale.ConsoleLogger('ibex.react');

function ibexReact(_ref) {
    var View = _ref.View;
    var initialData = _ref.initialData;
    var element = _ref.element;

    return function (app) {
        app.context.render = function (View, data) {
            logger.debug('render view', { viewName: View.name, data: data });

            if (!View) {
                throw new Error('View is undefined, class expected');
            }

            throw new Error('TODO');
        };

        var context = Object.create(app.context); // initial context.
        if (document.readyState === 'complete') {
            logger.debug('load react components, document is already ready');
            (0, _fody.render)({
                context: context,
                Component: View,
                data: initialData,
                element: element
            });
        } else {
            logger.debug('waiting document ready');
            $document.on('DOMContentLoaded', function () {
                logger.debug('load react components, document is ready');
                (0, _fody.render)({
                    context: context,
                    Component: View,
                    data: initialData,
                    element: element
                });
            });
        }
    };
}
//# sourceMappingURL=index.js.map