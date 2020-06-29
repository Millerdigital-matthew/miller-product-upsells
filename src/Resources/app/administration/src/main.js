import './page/sw-product-detail';
import './view/sw-product-detail-upsells';

Shopware.Module.register('sw-new-tab-upsells', {
    routeMiddleware(next, currentRoute) {
        if (currentRoute.name === 'sw.product.detail') {
            currentRoute.children.push({
                name: 'sw.product.detail.upsells',
                path: '/sw/product/detail/:id/upsells',
                component: 'sw-product-detail-upsells',
                meta: {
                    parentPath: "sw.product.index"
                },
                props: {
                    product: Object
                },
            });
        }
        next(currentRoute);
    }
});

import template from './extension/sw-product-detail-upsells/sw-product-detail-upsells.html.twig';

Shopware.Component.override('sw-product-detail-upsells', {
    template
});

