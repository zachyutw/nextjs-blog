const { Component } = require('react');
const Router = require('next/router').default;
const { action } = require('@storybook/addon-actions');
const PropTypes = require('prop-types');

const actionWithPromise = () => {
    action('clicked link')();
    return new Promise((resolve, reject) => reject());
};

const mockedRouter = {
    push: actionWithPromise,
    replace: actionWithPromise,
    prefetch: actionWithPromise,
    route: '/mock-route',
    pathname: 'mock-path',
};

Router.router = mockedRouter;

const withMockRouterContext = (mockRouter) => {
    class MockRouterContext extends Component {
        getChildContext() {
            return {
                router: Object.assign(mockedRouter, mockRouter),
            };
        }
        render() {
            return this.props.children;
        }
    }

    MockRouterContext.childContextTypes = {
        router: PropTypes.object,
    };

    return MockRouterContext;
};

module.exports.mockedRouter = mockedRouter;
module.exports.withMockRouterContext = withMockRouterContext;
