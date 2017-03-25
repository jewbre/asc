<?php
/**
 * Created by PhpStorm.
 * Date: 25/03/2017
 * Time: 16:16
 */

use envBuilder\helpers\Environment;
use envBuilder\helpers\EnvironmentConfig;
use envBuilder\helpers\Prototype;

require_once 'vendor/autoload.php';

if (isset($_POST['Environment']) && isset($_POST['Environment']['action'])) {
    switch ($_POST['Environment']['action']) {
        case 'create' :
            $config = new EnvironmentConfig(
                $_POST['Environment']['name'],
                $_POST['Environment']['vendorPath'],
                $_POST['Environment']['dbName'],
                $_POST['Environment']['dbUser'],
                $_POST['Environment']['dbPass'] == EnvironmentConfig::EMPTY_PASS_PLACEHOLDER ? '' : $_POST['Environment']['action']);
            $prototype = new Prototype($_POST['Environment']['prototype']);

            $environment = new Environment($_POST['Environment']['name'], $config, Environment::ENVIRONMENTS_PATH,
                $prototype);
            $environment->create();
            break;
    }
}


?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="shortcut icon" href="../../assets/ico/favicon.ico">

    <title>Degordian Project Builder</title>

    <!-- Bootstrap core CSS -->
    <link href="bootstrap/css/bootstrap.min.css" rel="stylesheet">

    <!-- Custom styles for this template -->
    <link href="css/style.css" rel="stylesheet">

    <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
    <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->

    <style>
        .list label {
            margin-left: 10px;
        }
    </style>
</head>

<body>

<div class="container">

    <div class="row">
        <div class="bs-example">
            <form class="form-horizontal" role="form" method="POST" style="margin-top: 10px;">
                <input type="hidden" name="Environment[action]" value="create">
                <legend>Environment values</legend>
                <div class="form-group">
                    <div class="row">
                        <label for="environmentName" class="col-sm-2 control-label">Name</label>
                        <div class="col-sm-4">
                            <input type="text" class="form-control" id="environmentName" name="Environment[name]"
                                   required>
                        </div>
                    </div>
                    <div class="row">

                        <label for="vendorPath" class="col-sm-2 control-label">Vendor path</label>
                        <div class="col-sm-4">
                            <input type="text" class="form-control" id="vendorPath" name="Environment[vendorPath]"
                                   value="../../vendor" required>
                        </div>
                    </div>
                </div>

                <legend>Environment prototype</legend>
                <div class="form-group">
                    <div class="row">
                        <label for="sel1" class="col-sm-2 control-label">Prototypes:</label>
                        <div class="col-sm-4">
                            <select class="form-control col-sm-4" id="sel1" name="Environment[prototype]">
                                <?php
                                foreach (Prototype::getList() as $prototype) {
                                    ?>
                                    <option value="<?= $prototype ?>"><?= $prototype ?></option>
                                <?php } ?>
                            </select>
                        </div>
                    </div>
                </div>

                <legend>DB settings</legend>
                <div class="form-group">
                    <div class="row">
                        <label for="dbName" class="col-sm-2 control-label">DB name</label>
                        <div class="col-sm-4">
                            <input type="text" class="form-control" id="dbName" name="Environment[dbName]" required>
                        </div>
                    </div>
                    <div class="row">
                        <label for="dbUser" class="col-sm-2 control-label">DB user</label>
                        <div class="col-sm-4">
                            <input type="text" class="form-control" id="dbUser" name="Environment[dbUser]" value="root"
                                   required>
                        </div>
                    </div>
                    <div class="row">
                        <label for="dbPass" class="col-sm-2 control-label">DB password</label>
                        <div class="col-sm-4">
                            <input type="hidden" class="form-control" id="dbPass" name="Environment[dbPass]"
                                   value="<?= EnvironmentConfig::EMPTY_PASS_PLACEHOLDER ?>">
                            <input type="text" class="form-control" id="dbPass" name="Environment[dbPass]">
                        </div>
                    </div>
                </div>
                <div class="form-actions">
                    <button type="submit" name="submit" class="btn btn-primary">
                        Create environment<i class="icon-ok icon-white"></i>
                    </button>
                </div>
            </form>
        </div>
    </div>


    <div class="row">
        <div class="bs-example">
            <legend>Existing environments</legend>
            <table class="table table-striped">
                <thead>
                <tr>
                    <th>Name</th>
                </tr>
                </thead>

                <tbody>
                <?php foreach (Environment::getList() as $environment) {
                    ?>
                    <tr>
                        <td><?= $environment ?></td>
                    </tr>
                <?php } ?>
                </tbody>

            </table>
        </div>
    </div>
</div><!-- /.container -->


<!-- Bootstrap core JavaScript
================================================== -->
<!-- Placed at the end of the document so the pages load faster -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
<script src="bootstrap/js/bootstrap.min.js"></script>
<script src="js/jqBootstrapValidation.js"></script>

<script>

    $(function () {
        $("input,select,textarea").not("[type=submit]").jqBootstrapValidation();
    });

    //use for populating input fields
    var post = {
        <?php
        $output = array();
        foreach ($_POST as $key => $value) {
            $output[] = sprintf(' %s : "%s"', $key, $value);
        }
        echo implode(",", $output);
        ?>
    };


    $.each(post, function (index, value) {
        if ($('input[name="' + index + '"]').is(':radio')) {
            $('input[name="' + index + '"]').removeAttr('checked');
            $('input[name="' + index + '"][value="' + value + '"]').attr('checked', 'checked');
        } else {
            $('input[name="' + index + '"]').val(value);
        }

    });
</script>

</body>
</html>




