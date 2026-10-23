class Mothership {
  static WIDTH = 50;
  static HEIGHT = 20;
  static PICKUP_DIAMETER = Mothership.WIDTH * 1.2;
  static CORNER_RADIUS = 8;
  static NUM_PORTHOLES = 4;
  static PORTHOLE_DIAMETER = 6;

  physics;

  constructor() {
    this.physics = new Physics();
  }

  draw() {
    push();
    drawEverywhere({
      offset: this.physics,
      drawFn: () => {
        Mothership.drawMothership({ rotation: this.physics.rotation });
        if (game.debug) {
          this.physics.draw();
          noFill();
          stroke("#fff");
          circle(0, 0, Mothership.PICKUP_DIAMETER);
        }
      },
    });
    pop();
  }

  /**
   * Draws the Mothership's shape around (0, 0). Assumes the caller has
   * already moved the transform to wherever the Mothership should appear.
   **/
  static drawMothership({ rotation }) {
    push();
    fill("#c50ec8");
    rectMode(CENTER);
    rect(0, 0, Mothership.WIDTH, Mothership.HEIGHT, Mothership.CORNER_RADIUS);

    let windowStart = -Mothership.WIDTH / 2.7;

    for (let i = 0; i < Mothership.NUM_PORTHOLES; i++) {
      fill("#e5ae38");
      circle(
        (Mothership.WIDTH / 4) * i + windowStart,
        0,
        Mothership.PORTHOLE_DIAMETER
      );
    }
    pop();

    // TODO (Phase 1): Replace the placeholder with the Mothership: a rounded
    // rectangle, Mothership.WIDTH by Mothership.HEIGHT, with a row of
    // Mothership.NUM_PORTHOLES evenly spaced circular windows along the
    // middle. Draw it around (0, 0), rotated by `rotation`.
  }

  move(delta) {
    this.physics.move(delta, { constrain: true });
  }
}
