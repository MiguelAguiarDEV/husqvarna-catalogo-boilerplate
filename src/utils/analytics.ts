declare global {
    interface Window {
        dataLayer: any[];
    }
}

export function pushPopupToDataLayer(_productData: any) {
    /*if (typeof window !== 'undefined' && window.dataLayer && productData?.name !== undefined) {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            event: "eventoEC",
            eventCat: "catalogo",
            eventAct: "detail",
            eventLbl: "section",
            language: "es",
            ecommerce: {
                currencyCode: "EUR",
                products: [
                    {
                        name: productData.name,
                        id: productData.id,
                        price: productData.price,
                        brand: "Husqvarna",
                        category: productData.category,
                        variant: productData.variant
                    }
                ]
            }
        })
    };*/
}

export function pushPageImpression(locale: string) {
    if (typeof window !== 'undefined' && window.dataLayer) {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            event: "cookie_consent_update",
            eventCat: "catalogo",
            eventAct: "Pageview",
            eventLbl: "home",
            language: locale,
            noInteraction: "true",
            ecommerce: { currencyCode: "EUR", impressions: [] }
        });
    }
}

export function pushProductsToDataLayer(locale: string, section: string, products: any[]) {
    if (typeof window !== 'undefined' && window.dataLayer) {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            event: "eventoEC",
            eventCat: "catalogo",
            eventAct: "productImpresion",
            eventLbl: section,
            language: locale,
            noInteraction: "true",
            ecommerce: {
                currencyCode: "EUR",
                impressions: products
            }
        });
    }
}

export function pushBuyProduct(section: string, locale: string, product: string) {
    if (typeof window !== 'undefined' && window.dataLayer) {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            event: "eventoEC",
            eventCat: "catalogo",
            eventAct: "comprarahora",
            eventLbl: section,
            language: locale,
            product: product
        });
    }
}

export function pushVideoPlay(slide: string) {
    if (typeof window !== 'undefined' && window.dataLayer) {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            event: 'eventoEC',
            eventCat: 'catalogo',
            eventAct: 'ver_video',
            eventLbl: slide,
        });
    }
}
