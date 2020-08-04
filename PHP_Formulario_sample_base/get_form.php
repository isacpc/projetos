<?php

        $email = addslashes($_POST['emailtxt']);
        $nome = addslashes($_POST['nometxt']);
        $cel = addslashes($_POST['celtxt']);
        $area = addslashes($_POST['areatxt']);

        $para = "%email_de_recebimento%@dom.dom";
        $assunto = "Preenchimento de Formulário Online";
        $all = 'Email: '.$email."\n"."Nome: ".$nome."\n"."Celular: ".$cel."\n"."Mensagem: "."\n";
        $header = "From: exemplo@dom_atual"."\n"."Reply-To: ".$email."\n"."X-mailer: PHP/".phpversion();

        if(mail($para, $assunto, $all, $header)){
            echo 'Email Enviado Com Sucesso!';
        } else {
            echo "Erro ao Enviar, Verifique as Informações!";
        };
    //a função mail() retorna true ou false
    echo $email.'<br/>'.$nome.'<br/>'.$cel.'<br/>'.$area.'<br/>';
?>