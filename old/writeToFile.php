//From
//http://stackoverflow.com/questions/15722765/saving-text-file-on-server-using-javascript

if(!empty($_POST['dataString'])){
$data = $_POST['dataString'];
$fname = "queue.txt";

$file = fopen($fname, 'a+');
echo "Received request\n"
fwrite($file, $data);
fclose($file);
}