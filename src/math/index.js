/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var CONST = require('./const');
var Extend = require('../utils/object/Extend');

/**
 * @namespace Phaser.Math
 */

var PhaserMath = {

    //  Collections of functions
    Angle: require('./angle/'),
    Distance: require('./distance/'),
    Easing: require('./easing/'),
    Fuzzy: require('./fuzzy/'),
    Interpolation: require('./interpolation/'),
    Pow2: require('./pow2/'),
    Snap: require('./snap/'),

    //  Expose the RNG Class
    RandomDataGenerator: require('./random-data-generator/RandomDataGenerator'),

    //  Single functions
    Average: require('./Average'),
    Bernstein: require('./Bernstein'),
    Between: require('./Between'),
    CatmullRom: require('./CatmullRom'),
    CeilTo: require('./CeilTo'),
    Clamp: require('./Clamp'),
    DegToRad: require('./DegToRad'),
    Difference: require('./Difference'),
    Euler: require('./Euler'),
    Factorial: require('./Factorial'),
    FloatBetween: require('./FloatBetween'),
    FloorTo: require('./FloorTo'),
    FromPercent: require('./FromPercent'),
    GetSpeed: require('./GetSpeed'),
    IsEven: require('./IsEven'),
    IsEvenStrict: require('./IsEvenStrict'),
    Linear: require('./Linear'),
    LinearXY: require('./LinearXY'),
    MaxAdd: require('./MaxAdd'),
    Median: require('./Median'),
    MinSub: require('./MinSub'),
    Percent: require('./Percent'),
    RadToDeg: require('./RadToDeg'),
    RandomXY: require('./RandomXY'),
    RandomXYZ: require('./RandomXYZ'),
    RandomXYZW: require('./RandomXYZW'),
    Rotate: require('./Rotate'),
    RotateAround: require('./RotateAround'),
    RotateAroundDistance: require('./RotateAroundDistance'),
    RotateTo: require('./RotateTo'),
    RoundAwayFromZero: require('./RoundAwayFromZero'),
    RoundTo: require('./RoundTo'),
    SinCosTableGenerator: require('./SinCosTableGenerator'),
    SmootherStep: require('./SmootherStep'),
    SmoothStep: require('./SmoothStep'),
    ToXY: require('./ToXY'),
    TransformXY: require('./TransformXY'),
    Within: require('./Within'),
    Wrap: require('./Wrap'),

    //  Vector classes
    Vector2: require('./Vector2'),
    Vector3: require('./Vector3'),
    Vector4: require('./Vector4'),
    Matrix3: require('./Matrix3'),
    Matrix4: require('./Matrix4'),
    Quaternion: require('./Quaternion'),
    RotateVec3: require('./RotateVec3')

};

//   Merge in the consts

PhaserMath = Extend(false, PhaserMath, CONST);

//  Export it

module.exports = PhaserMath;
