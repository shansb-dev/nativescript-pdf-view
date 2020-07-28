import { Property, View } from 'tns-core-modules/ui/core/view';
export declare abstract class PDFViewCommon extends View {
    enableAnnotationRendering: boolean;
    static loadEvent: string;
    protected tempFolder;
    public loadPDF(src: string): void;
    protected createTempFile(base64data: any): void;
    src: string;
    static notifyOfEvent(eventName: string, pdfViewRef: WeakRef<PDFViewCommon>): void;
}
export declare const enableAnnotationRenderingProperty: Property<PDFViewCommon, boolean>;
export declare const srcProperty: Property<PDFViewCommon, string>;
