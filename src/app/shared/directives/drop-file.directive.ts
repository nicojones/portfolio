import {Directive, ElementRef, EventEmitter, HostListener, Output, Renderer2} from "@angular/core";
import {PreventDefault} from "~app/shared/interfaces";

@Directive({
  selector: "[appDropZone]"
})
export class DraggerDirective {

  @Output()
  public filesDropped = new EventEmitter<FileList>();

  @Output()
  public dragChange = new EventEmitter<boolean>();

  constructor(
    private renderer: Renderer2,
    private hostElement: ElementRef
  ) {
  }

  @HostListener("dragover", ["$event"])
  public onDragOver($event: DragEvent): void {
    this.setDragState(true, $event);
  }

  @HostListener("dragleave", ["$event"])
  public onDragLeave($event: DragEvent): void {
    this.setDragState(false, $event);
  }

  @HostListener("drop", ["$event"])
  public onDrop($event: DragEvent): void {
    this.setDragState(false, $event);
    this.filesDropped.emit($event.dataTransfer.files);
  }

  private setDragState(state: boolean, $event: PreventDefault): void {
    $event.preventDefault();
    $event.stopPropagation();

    if (state) {
      this.renderer.addClass(this.hostElement.nativeElement, "dragging");
    } else {
      this.renderer.removeClass(this.hostElement.nativeElement, "dragging");
    }
    this.dragChange.emit(state);
  }


}
