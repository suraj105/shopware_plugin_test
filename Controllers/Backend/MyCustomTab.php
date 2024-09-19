<?php

class Shopware_Controllers_Backend_MyCustomTab extends Enlight_Controller_Action
{
    public function indexAction()
    {
        // Add your custom template directory to the view
        $this->View()->addTemplateDir(__DIR__ . '/../../Resources/views/');

        // not needed if index.tpl lies within my_custom_tab
        $this->View()->loadTemplate('backend/my_custom_tab/template/index.tpl');



        // SQL query to fetch id, name, and dob from the users table
        $users = Shopware()->Db()->fetchAll("
            SELECT firstname, lastname, birthday 
            FROM s_users
            ORDER BY firstname ASC
        ");

        // Assign the fetched users data to the view
        $this->View()->assign('users', $users);
    }
}
