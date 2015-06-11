let supports_extended_barriers;

function init () {

    // save barrier support function
    supports_extended_barriers = global.display.supports_extended_barriers;
}

function enable () {

    // override barrier support function
    global.display.supports_extended_barriers = function () { return false; }

    // recompute the layout
    global.screen.emit('monitors-changed');
}

function disable () {

    // restore barrier support function
    global.display.supports_extended_barriers = supports_extended_barriers;

    // recompute the layout
    global.screen.emit('monitors-changed');
}

// vim: ai et ts=4 sts=4 sw=4
