(this.webpackJsonp=this.webpackJsonp||[]).push([["miller-product-upsells"],{VHfK:function(e,t){e.exports='<sw-card title="Up selling">\n    <h2>Upselling content</h2>\n    \n    {% block sw_product_detail_upsells %}\n    {% endblock %}\n</sw-card>\n\n'},fxou:function(e,t){e.exports='{% block sw_product_detail_upsells %}\n    {% parent %}\n\n    <sw-container columns="repeat(auto-fit, minmax(250px, 1fr)" gap="0px 30px">\n        <sw-text-field label="Manufacturer ID" v-model="product.manufacturerId"></sw-text-field>\n    </sw-container>\n{% endblock %}'},rzEM:function(e,t,n){"use strict";n.r(t);var s=n("wgCA"),l=n.n(s);Shopware.Component.override("sw-product-detail",{template:l.a});var p=n("VHfK"),a=n.n(p);Shopware.Component.register("sw-product-detail-upsells",{template:a.a,metaInfo:()=>({title:"Up selling"})});var r=n("fxou"),o=n.n(r);Shopware.Module.register("sw-new-tab-upsells",{routeMiddleware:function(e,t){"sw.product.detail"===t.name&&t.children.push({name:"sw.product.detail.upsells",path:"/sw/product/detail/:id/upsells",component:"sw-product-detail-upsells",meta:{parentPath:"sw.product.index"},props:{product:Object}}),e(t)}}),Shopware.Component.override("sw-product-detail-upsells",{template:o.a})},wgCA:function(e,t){e.exports='{% block sw_product_detail_content_tabs_advanced_variants %}\n    {% parent %}\n\n    <sw-tabs-item :route="{ name: \'sw.product.detail.upsells\', params: { id: $route.params.id } }" title="Up selling">\n        Up selling\n    </sw-tabs-item>\n{% endblock %}'}},[["rzEM","runtime"]]]);