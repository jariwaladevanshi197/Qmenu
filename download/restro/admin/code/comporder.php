<?php
if (isset($_SERVER['HTTP_REFERER'])) {
    require '../../../connect.php';
    session_start();
    $restroid = $_SESSION['megausersession'];
    $orderid = $_POST['orderid'];

    $filename = '../json/preorder_' . $restroid . '.json';
    $neworderfile = '../json/finalorder_' . $restroid . '.json';
    // Open Preorder File with Lock
    $fp = fopen($filename, 'c+');
    if (flock($fp, LOCK_EX)) {
        $filesize = filesize($filename);
        $data = array();
        if ($filesize > 0) {
            $jsonString = fread($fp, $filesize);
            $data = json_decode($jsonString, true);
        }
        if (!is_array($data)) $data = array();

        $oldorder = null;
        $orderFoundIndex = -1;

        foreach ($data as $key => $value) {
            if ($value['orderid'] == $orderid) {
                $oldorder = $value;
                $orderFoundIndex = $key;
                break;
            }
        }

        if ($oldorder) {
            // Open Final Order File with Lock
            $fp2 = fopen($neworderfile, 'c+');
            if (flock($fp2, LOCK_EX)) {
                $filesize2 = filesize($neworderfile);
                $neworder = array();
                if ($filesize2 > 0) {
                    $jsonString2 = fread($fp2, $filesize2);
                    $neworder = json_decode($jsonString2, true);
                }
                if (!is_array($neworder)) $neworder = array();

                $tableexist = false;
                $tablekey = -1;

                foreach ($neworder as $k => $order) {
                    if ($order['tableid'] == $oldorder['tableid'] && $order['fullname'] == $oldorder['fullname'] && $order['number'] == $oldorder['number']) {
                        $tableexist = true;
                        $tablekey = $k;
                        break;
                    }
                }

                if ($tableexist) {
                    foreach ($oldorder['item'] as $olditem) {
                        $itemexist = false;
                        $nitemkey = -1;

                        foreach ($neworder[$tablekey]['item'] as $k1 => $newitem) {
                            if ($newitem['id'] == $olditem['id']) {
                                $itemexist = true;
                                $nitemkey = $k1;
                                break;
                            }
                        }

                        if ($itemexist) {
                            $neworder[$tablekey]['item'][$nitemkey]['quantity'] += $olditem['quantity'];
                            $neworder[$tablekey]['item'][$nitemkey]['totalprice'] = $neworder[$tablekey]['item'][$nitemkey]['price'] * $neworder[$tablekey]['item'][$nitemkey]['quantity'];
                        } else {
                            // Append new item to existing table order
                            $neworder[$tablekey]['item'][] = $olditem; // Using [] to append
                        }
                    }
                } else {
                    $neworder[] = $oldorder;
                }
                
                // Write Final Order
                ftruncate($fp2, 0);
                rewind($fp2);
                fwrite($fp2, json_encode($neworder));
                fflush($fp2);
                flock($fp2, LOCK_UN);
                
                // If Final Order Write Successful, Remove from Preorder
                unset($data[$orderFoundIndex]);
                $data = array_values($data); // Re-index

                // Write Preorder
                ftruncate($fp, 0);
                rewind($fp);
                fwrite($fp, json_encode($data));
                fflush($fp);
            }
            fclose($fp2);
        } else {
            // Order not found, unlock preorder
             // No changes needed
        }
        flock($fp, LOCK_UN);
    }
    fclose($fp);
} else {
    header('location:../index.php');
    exit;
}
