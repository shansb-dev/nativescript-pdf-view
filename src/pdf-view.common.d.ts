import * as fs from 'tns-core-modules/file-system';
import { Property, View } from 'tns-core-modules/ui/core/view';
export declare abstract class PDFViewCommon extends View {
    static loadEvent: string;
    enableAnnotationRendering: boolean;
    src: string;
    protected tempFolder: fs.Folder;
    static notifyOfEvent(eventName: string, pdfViewRef: WeakRef<any>): void;
    loadPDF(src: string): void;
    protected createTempFile(base64data: any): void;
}
export declare const enableAnnotationRenderingProperty: Property<PDFViewCommon, boolean>;
export declare const srcProperty: Property<PDFViewCommon, string>;
