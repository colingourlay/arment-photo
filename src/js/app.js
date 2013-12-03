/*globals document, console, alert */

var effects = [
    'rotated',
    'squared',
    'saturated',
    'highlighted',
    'vignette',
    'polaroid',
    'emotional',
    'done'
];

var appliedEffects = [];

var steps = [
    'Take a boring photo with your 50mm f/1.8 prime wide open, with a small sliver of your subject in focus. Leave large portions of the subject outside of the focal plane, regardless of how important or interesting they are.',
    'Rotate the camera 30 degrees before shooting.',
    'Square-crop.',
    'Oversaturate or slightly desaturate. Tint red to look old. Under no circumstances should you apply a neutral white balance.',
    'Blow out the highlights.',
    'Add a very strong fake vignette.',
    'Finish it off with a fake Polaroid frame.',
    'For bonus points, overlay a pithy, emotional sentence, preferably about a failed romance. Ideally, the overlay should be in white Helvetica.',
    '2013 <a href="http://twitter.com/collypops">Colin Gourlay</a><br><br>Based on a 2010 <a href="http://www.marco.org/2010/01/11/how-to-post-photos-on-the-internet">post</a> by <a href="http://twitter.com/marcoarment">Marco Arment</a><br><br>Image credit: <a href="http://www.flickr.com/photos/superfantastic/1434633639/">SuperFantastic</a>'
];

var photo = document.getElementById('photo');
var step = document.getElementById('step');
var prev = document.getElementById('prev');
var next = document.getElementById('next');

function render() {
    photo.className = 'photo' + (appliedEffects.length ? ' ' : '') + appliedEffects.join(' ');
    step.innerHTML = steps[appliedEffects.length];
    next.className = 'next' + (effects.length ? '' : ' hidden');
    prev.className = 'prev' + (appliedEffects.length ? '' : ' hidden');
}

next.onclick = function next(event) {
    if (effects.length) {
        appliedEffects.push(effects.shift());
        render();
    }
};

prev.onclick = function prev(event) {
    if (appliedEffects.length) {
        effects.unshift(appliedEffects.pop());
        render();
    }
};
