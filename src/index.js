/* global $document */
import { ConsoleLogger } from 'nightingale';
import { render } from 'fody';

const logger = new ConsoleLogger('ibex.react');

export default function ibexReact({ View, initialData, element }) {
    return (app) => {
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
            render({
                context,
                Component: View,
                data: initialData,
                element,
            });
        } else {
            logger.debug('waiting document ready');
            $document.on('DOMContentLoaded', () => {
                logger.debug('load react components, document is ready');
                render({
                    context,
                    Component: View,
                    data: initialData,
                    element,
                });
            });
        }
    };
}
