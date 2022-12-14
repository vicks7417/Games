/*-
 * #%L
 * Codenjoy - it's a dojo-like platform from developers to developers.
 * %%
 * Copyright (C) 2012 - 2022 Codenjoy
 * %%
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public
 * License along with this program.  If not, see
 * <http://www.gnu.org/licenses/gpl-3.0.html>.
 * #L%
 */

var NamdreabDirection = module.exports = function() {

    var Direction = require('./../../engine/direction.js');

    // move numbers
    Direction.LEFT = Direction._init(1, -1, 0, 'left');
    Direction.RIGHT = Direction._init(2, 1, 0, 'right');
    Direction.UP = Direction._init(3, 0, 1, 'up');
    Direction.DOWN = Direction._init(4, 0, -1, 'down');

    return Direction;
}