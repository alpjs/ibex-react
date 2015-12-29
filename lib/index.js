'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = ibexReact;

var _nightingale = require('nightingale');

var _fody = require('fody');

/* global $document */

const logger = new _nightingale.ConsoleLogger('ibex.react');

function ibexReact(_ref) {
    let View = _ref.View;
    let initialData = _ref.initialData;
    let element = _ref.element;

    return app => {
        app.context.render = function (View, data) {
            logger.debug('render view', { viewName: View.name, data });

            if (!View) {
                throw new Error('View is undefined, class expected');
            }

            throw new Error('TODO');
        };

        const context = Object.create(app.context); // initial context.
        if (document.readyState === 'complete') {
            logger.debug('load react components, document is already ready');
            (0, _fody.render)({
                context,
                Component: View,
                data: initialData,
                element
            });
        } else {
            logger.debug('waiting document ready');
            $document.on('DOMContentLoaded', () => {
                logger.debug('load react components, document is ready');
                (0, _fody.render)({
                    context,
                    Component: View,
                    data: initialData,
                    element
                });
            });
        }
    };
}
//# sourceMappingURL=index.js.map