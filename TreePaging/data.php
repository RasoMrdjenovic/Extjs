<?php
$data = array();
$start = $_GET['start'];
$limit = $_GET['limit'];
$children = array(
                array('id'=>1, 'text'=>'child1', 'leaf'=>true, 'qtitle'=>array('price'=>6465)),
                array('id'=>2, 'text'=>'child2', 'leaf'=>true, 'qtitle'=>array('price'=>6565)),
                array('id'=>3, 'text'=>'child3', 'leaf'=>true, 'qtitle'=>array('price'=>515)),
                array('id'=>4, 'text'=>'child4', 'leaf'=>true, 'qtitle'=>array('price'=>565)),
                array('id'=>5, 'text'=>'child5', 'leaf'=>true, 'qtitle'=>array('price'=>561)),
                array('id'=>6, 'text'=>'child6', 'leaf'=>true, 'qtitle'=>array('price'=>8761)),
                array('id'=>7, 'text'=>'child7', 'leaf'=>true, 'qtitle'=>array('price'=>8685)),
                array('id'=>8, 'text'=>'child8', 'leaf'=>true, 'qtitle'=>array('price'=>526)),
                array('id'=>9, 'text'=>'child9', 'leaf'=>true, 'qtitle'=>array('price'=>85258)),
                array('id'=>10, 'text'=>'child10', 'leaf'=>true, 'qtitle'=>array('price'=>202))
           );
$data = array_slice($children, $start, $limit); 
echo json_encode($data);
?>
