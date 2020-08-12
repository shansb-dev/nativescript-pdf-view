import * as app from 'tns-core-modules/application';
import * as fs from 'tns-core-modules/file-system';
import { Property, View } from 'tns-core-modules/ui/core/view';
import * as dialogs from 'tns-core-modules/ui/dialogs';

export abstract class PDFViewCommon extends View {
  public static loadEvent = 'load';

  /**
   * Render annotations (such as comments, colors or forms) on Android
   */
  public enableAnnotationRendering: boolean;

  /**
   * the source url of the PDF to show
   */
  public src: string;

  protected tempFolder = fs.knownFolders.temp().getFolder('PDFViewer.temp/');

  public static notifyOfEvent(
    eventName: string,
    pdfViewRef: WeakRef<any>,
  ) {
    const viewer = pdfViewRef.get();

    if (viewer) {
      viewer.notify({ eventName, object: viewer });
    }
  }

  public loadPDF(src: string) {}

  protected createTempFile(base64data: any) {
      this.tempFolder.clear().then(() => {
          const file = fs.Folder.fromPath(this.tempFolder.path)
          .getFile('_' + Date.now() + '.pdf');
          file.writeSync(base64data);
          this.loadPDF(file.path);
      });
  }
}

export const enableAnnotationRenderingProperty = new Property<PDFViewCommon, boolean>({
  name: 'enableAnnotationRendering',
  defaultValue: false,
});
enableAnnotationRenderingProperty.register(PDFViewCommon);

export const srcProperty = new Property<PDFViewCommon, string>({
  name: 'src',
});
srcProperty.register(PDFViewCommon);
