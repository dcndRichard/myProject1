// (function () {
    // REUSABLE VARIABLES **************************************************    

    const _ = (id) => {
        return document.getElementById(id);
    }

    // GAME CONSTRUCTOR **************************************************
    function Game(_id, _name, _numPlayers) {
        this.id = _id
        this.name = _name;
        this.numPlayers = _numPlayers;
    }
    Game.prototype.getName = function () {
        return this.name;
    }
    Game.prototype.getNumPlayers = function () {
        return this.numPlayers;
    }
    Game.prototype.addPlayer = function () {
        return ++players
    }



    // DEPENDANCIES ************************************************************
    const gamesCreated = [];

    const checkGameExsist = (gameName) => {
        for (let game of gamesCreated) {
            if (game.getName() === gameName) {
                alert(`${name} already created`);
                return false;
            }
        }
    }


    let createGameId = function () {
        var n = 0;
        return function () {
            return ++n
        }
    }()

    // USER FUNCTIONS ************************************************************
    let createGame = () => {

        if (_('newGame').value === "") {
            alert('you must enter a game name');
            return false
        }

        let gameName = _('newGame').value || 'no name game';
        let numPlayers = _('numPlayers').value || 0;

        checkGameExsist(gameName)
        gamesCreated.push(new Game(createGameId(), gameName, numPlayers))
        _('newGame').value = "";
        _('numPlayers').selectedIndex = 0;
        _('newGame').focus()
    }


    getAllGames = () => {
        let data = '';
        _("display").innerHTML = "";//reset display;

        for (let game of gamesCreated) {
            data += `${JSON.stringify(game)} <button type="button" onclick="removeGame(${game.id})">-</button>`
        }
        _("display").innerHTML += data;

    }


    function removeGame(id) {
        for (let game of gamesCreated) {
            if (game.id === id) {
                gamesCreated.splice(gamesCreated.indexOf(game), 1)
                getAllGames()
            }
        }
    }
// })()

