/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var Normalize = require('./Normalize');

/**
 * Reverse the given angle.
 *
 * @function Phaser.Math.Angle.Reverse
 * @since 3.0.0
 *
 * @param {number} angle - The angle to reverse, in radians.
 *
 * @return {number} The reversed angle, in radians.
 */
var Reverse = function (angle)
{
    return Normalize(angle + Math.PI);
};

module.exports = Reverse;
