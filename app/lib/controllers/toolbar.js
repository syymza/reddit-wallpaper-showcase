'use strict';

export default function ($mdSidenav)  {

    let self = this;

    self.openSidenav = () => {
        $mdSidenav('left').toggle();
    };
}