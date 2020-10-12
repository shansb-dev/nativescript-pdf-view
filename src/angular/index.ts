import { NgModule } from "@angular/core";
import { isKnownView, NativeScriptCommonModule, registerElement } from "@nativescript/angular";

const pdfviewElementName = "PDFView";

if (!isKnownView(pdfviewElementName)) {
    registerElement(pdfviewElementName, () => require("nativescript-pdf-view").PDFView);
}

@NgModule()
export class PDFViewModule {
    imports: [NativeScriptCommonModule];
}