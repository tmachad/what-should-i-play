import { Component, OnInit, Input, TemplateRef, ContentChild, Output, EventEmitter } from '@angular/core';
import { trigger, state, style, transition, animate, AnimationEvent } from '@angular/animations';

@Component({
  selector: 'app-slot-reel',
  templateUrl: './slot-reel.component.html',
  styleUrls: ['./slot-reel.component.scss'],
  animations: [
    trigger("spin", [
      state("start", style({
        transform: 'translateY(-100%)'
      })),
      state("end", style({
        transform: 'translateY(0)'
      })),
      transition("start => end", [
        animate('3000ms ease')
      ]),
      transition("end => start", [
        animate(0)
      ])
    ])
  ]
})
export class SlotReelComponent implements OnInit {

  @Input()
  @ContentChild(TemplateRef)
  private itemTemplate: TemplateRef<any>;

  @Input()
  private items: any[];

  @Output()
  public itemSelected: EventEmitter<any> = new EventEmitter();

  private _spin: boolean = false;
  private reelItems: any[];
  private numberOfShownItems: number = 20;
  private spinOnReset: boolean = false;

  constructor() { }

  ngOnInit() {}

  /**
   * Event callback triggered when the spin animation completes.
   * 
   *
   * @private
   * @param {AnimationEvent} event The animation event data.
   * @memberof SlotReelComponent
   */
  private spinDone(event: AnimationEvent): void {
    if (event.toState === "end") {
      this.itemSelected.emit(this.reelItems[0]);
    } else if (event.toState === "start" && this.spinOnReset) {
      this.spin();
    }
  }

  /**
   * Spin the slot reel! Resets the slot reel before spinning if it hasn't already been reset.
   *
   * @memberof SlotReelComponent
   */
  public spin(): void {
    if (this._spin) {
      // reel has already been spun, need to reset before spinning
      this.reset(true);
    } else {
      let newReelItems = [];
      for (let i = 0; i < this.numberOfShownItems; i++) {
        let randIndex = Math.floor(Math.random() * this.items.length);
        newReelItems.push(this.items[randIndex]);
      }
      this.reelItems = newReelItems;

      this._spin = true;
    }
  }

  /**
   * Reset the slot wheel back to its initial position.
   *
   * @memberof SlotReelComponent
   */
  public reset(spinAfterReset: boolean = false): void {
    this.spinOnReset = spinAfterReset;
    this._spin = false;
  }
}
