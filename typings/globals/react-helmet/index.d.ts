// Generated by typings
// Source: https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/4595e61ad1e8c5f48255a016471487f100a818f8/react-helmet/react-helmet.d.ts
declare namespace ReactHelmet {
    import React = __React;

    interface HelmetProps {
        base?: any;
        defaultTitle?: string;
        htmlAttributes?: any;
        link?: Array<any>;
        meta?: Array<any>;
        script?: Array<any>;
        title?: string;
        titleTemplate?: string;
        onChangeClientState?: (newState: any) => void;
    }

    interface HelmetData {
        base: HelmetDatum;
        htmlAttributes: HelmetDatum;
        link: HelmetDatum;
        meta: HelmetDatum;
        script: HelmetDatum;
        title: HelmetDatum;
    }

    interface HelmetDatum {
        toString(): string;
        toComponent(): React.Component<any, any>;
    }

    class HelmetComponent extends React.Component<HelmetProps, any> {}
}

declare module "react-helmet" {
    var Helmet: {
        (): ReactHelmet.HelmetComponent
        rewind(): ReactHelmet.HelmetData
    }

    export = Helmet;
}