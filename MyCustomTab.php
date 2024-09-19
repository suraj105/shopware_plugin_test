<?php

namespace MyCustomTab;

use Shopware\Components\Plugin;


class MyCustomTab extends Plugin
{
    public static function getSubscribedEvents()
    {
        return [
            'Enlight_Controller_Dispatcher_ControllerPath_Backend_MyCustomTab' => 'onGetBackendController'
        ];
    }

    /**
     * @return string
     */
    public function onGetBackendController()
    {
        return __DIR__ . '/Controllers/Backend/MyCustomTab.php';
    }

}
