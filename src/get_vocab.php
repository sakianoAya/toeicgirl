<?php
header("Access-Control-Allow-Origin: *");
//允許來自任何來源的請求。
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
//指定允許的 HTTP 方法（如 GET、POST）。
header("Access-Control-Allow-Headers: Content-Type");
//允許的自定義請求頭部（如 Content-Type）。


// databsse設定
$host = 'localhost';
$dbname = 'toeic_db';
$username = 'root';
$password = 'sakia520';

// 建立資料庫連線
try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $orderBy = $_GET['order_by'] ?? 'words'; // 默認按 'words' 排序
    $order = $_GET['order'] ?? 'ASC'; // 默認升序
    $filterClass = $_GET['class'] ?? ''; // 過濾條件：詞性
    $filterLevel = $_GET['level'] ?? ''; // 過濾條件：難度等級

    // 構建查詢語句
    $query = "SELECT * FROM toeic_vocab";
    $conditions = [];
    $params = [];

    if ($filterClass) {
        $conditions[] = "class = :class";
        $params[':class'] = $filterClass;
    }
    if ($filterLevel) {
        $conditions[] = "level = :level";
        $params[':level'] = $filterLevel;
    }

    if ($conditions) {
        $query .= " WHERE " . implode(" AND ", $conditions);
    }

    $query .= " ORDER BY $orderBy $order";

    $stmt = $pdo->prepare($query);
    $stmt->execute($params);

    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($result);
} catch (PDOException $e) {
    echo json_encode(["error" => $e->getMessage()]);
}
?>
