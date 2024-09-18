<?php

class MyCustomTab extends Enlight_Controller_Action
{
    public function indexAction()
    {
        // Add your custom template directory to the view
        $this->View()->addTemplateDir(__DIR__ . '/../../Resources/views/');


        $this->View()->loadTemplate('backend/my_custom_tab/index.tpl');
    }
}
