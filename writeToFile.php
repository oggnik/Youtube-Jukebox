//From
//http://stackoverflow.com/questions/15722765/saving-text-file-on-server-using-javascript

if(!empty($_POST['dataString'])){
$data = $_POST['dataString'];
$fname = "queue.txt";

$file = fopen($fname, 'a+');
fwrite($file, $data);
fclose($file);
}