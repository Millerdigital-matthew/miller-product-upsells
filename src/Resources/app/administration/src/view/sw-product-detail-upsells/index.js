import template from './sw-product-detail-upsells.html.twig';

Shopware.Component.register('sw-product-detail-upsells', {
    template,

    metaInfo() {
        return {
            title: 'Up selling'
        };
    },
});