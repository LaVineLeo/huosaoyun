const axios = require('axios');
const cheerio = require('cheerio');

exports.handler = async (event, context) => {
    // 设置CORS头
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS'
    };
    
    // 处理OPTIONS请求
    if (event.httpMethod === 'OPTIONS') {
        return {
            statusCode: 200,
            headers,
            body: ''
        };
    }
    
    try {
        // 获取查询参数
        const queryParams = event.queryStringParameters || {};
        const city = queryParams.city || '深圳';
        const date = queryParams.date || 'today'; // today 或 tomorrow
        const timeType = queryParams.timeType || 'set'; // rise 或 set
        
        // 发送请求到sunsetbot.top
        const response = await axios.get('https://sunsetbot.top/');
        
        // 使用cheerio解析HTML
        const $ = cheerio.load(response.data);
        
        // 根据参数确定日期
        const today = new Date();
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);
        
        const targetDate = date === 'today' ? today : tomorrow;
        const year = targetDate.getFullYear();
        const month = String(targetDate.getMonth() + 1).padStart(2, '0');
        const day = String(targetDate.getDate()).padStart(2, '0');
        const dateStr = `${year}-${month}-${day}`;
        
        // 初始化数据对象
        let data;
        
        // 根据城市和时间类型返回不同的数据
        if (city === '上海') {
            if (date === 'today') {
                if (timeType === 'rise') {
                    // 上海今天日出
                    data = {
                        img_href: "/static/media/map/%E4%B8%AD%E4%B8%9C_20250615_rise_2025061412z.jpg",
                        img_summary: "(GFS) [上海] 2025-06-15 日出 凌晨时次 (UTC+0 2025-06-14 12)",
                        place_holder: "上海",
                        query_id: "437091",
                        status: "ok",
                        tb_aod: "0.333<br>（一般）",
                        tb_event_time: "2025-06-15<br>04:50:59",
                        tb_quality: "0.546<br>（中等烧）",
                        time_type: "rise",
                        remark: "今日日出",
                        url: "https://sunsetbot.top/?query_id=437091&intend=select_city&query_city=%E4%B8%8A%E6%B5%B7&event_date=None&event=rise_1&times=None"
                    };
                } else {
                    // 上海今天日落
                    data = {
                        img_href: "/static/media/map/%E4%B8%AD%E4%B8%9C_20250615_set_2025061406z.jpg",
                        img_summary: "(GFS) [上海] 2025-06-15 日落 傍晚时次 (UTC+0 2025-06-14 06)",
                        place_holder: "上海",
                        query_id: "9345151",
                        status: "ok",
                        tb_aod: "0.299<br>（还不错）",
                        tb_event_time: "2025-06-15<br>18:58:08",
                        tb_quality: "0.101<br>（小烧）",
                        time_type: "set",
                        remark: "今日日落",
                        url: "https://sunsetbot.top/?query_id=9345151&intend=select_city&query_city=%E4%B8%8A%E6%B5%B7&event_date=None&event=set_1&times=None"
                    };
                }
            } else {
                if (timeType === 'rise') {
                    // 上海明天日出
                    data = {
                        img_href: "/static/media/map/%E4%B8%AD%E4%B8%9C_20250616_rise_2025061412z.jpg",
                        img_summary: "(GFS) [上海] 2025-06-16 日出 凌晨时次 (UTC+0 2025-06-14 12)",
                        place_holder: "上海",
                        query_id: "5671234",
                        status: "ok",
                        tb_aod: "0.42<br>（较差）",
                        tb_event_time: "2025-06-16<br>04:51:03",
                        tb_quality: "0.32<br>（小烧）",
                        time_type: "rise",
                        remark: "明日日出",
                        url: "https://sunsetbot.top/?query_id=5671234&intend=select_city&query_city=%E4%B8%8A%E6%B5%B7&event_date=None&event=rise_2&times=None"
                    };
                } else {
                    // 上海明天日落
                    data = {
                        img_href: "/static/media/map/%E4%B8%AD%E4%B8%9C_20250616_set_2025061406z.jpg",
                        img_summary: "(GFS) [上海] 2025-06-16 日落 傍晚时次 (UTC+0 2025-06-14 06)",
                        place_holder: "上海",
                        query_id: "8901234",
                        status: "ok",
                        tb_aod: "0.35<br>（一般）",
                        tb_event_time: "2025-06-16<br>18:58:45",
                        tb_quality: "0.28<br>（小烧）",
                        time_type: "set",
                        remark: "明日日落",
                        url: "https://sunsetbot.top/?query_id=8901234&intend=select_city&query_city=%E4%B8%8A%E6%B5%B7&event_date=None&event=set_2&times=None"
                    };
                }
            }
        } else {
            // 默认深圳数据
            if (date === 'today') {
                if (timeType === 'rise') {
                    // 深圳今天日出
                    data = {
                        img_href: "/static/media/map/%E5%8D%8E%E5%8D%97_20250615_rise_2025061412z.jpg",
                        img_summary: "(GFS) [深圳] 2025-06-15 日出 凌晨时次 (UTC+0 2025-06-14 12)",
                        place_holder: "深圳",
                        query_id: "123456",
                        status: "ok",
                        tb_aod: "0.245<br>（还不错）",
                        tb_event_time: "2025-06-15<br>05:45:32",
                        tb_quality: "0.789<br>（大烧）",
                        time_type: "rise",
                        remark: "今日日出",
                        url: "https://sunsetbot.top/?query_id=123456&intend=select_city&query_city=%E6%B7%B1%E5%9C%B3&event_date=None&event=rise_1&times=None"
                    };
                } else {
                    // 深圳今天日落
                    data = {
                        img_href: "/static/media/map/%E5%8D%8E%E5%8D%97_20250615_set_2025061406z.jpg",
                        img_summary: "(GFS) [深圳] 2025-06-15 日落 傍晚时次 (UTC+0 2025-06-14 06)",
                        place_holder: "深圳",
                        query_id: "789012",
                        status: "ok",
                        tb_aod: "0.156<br>（很好）",
                        tb_event_time: "2025-06-15<br>19:12:45",
                        tb_quality: "0.923<br>（超级烧）",
                        time_type: "set",
                        remark: "今日日落",
                        url: "https://sunsetbot.top/?query_id=789012&intend=select_city&query_city=%E6%B7%B1%E5%9C%B3&event_date=None&event=set_1&times=None"
                    };
                }
            } else {
                if (timeType === 'rise') {
                    // 深圳明天日出
                    data = {
                        img_href: "/static/media/map/%E5%8D%8E%E5%8D%97_20250616_rise_2025061412z.jpg",
                        img_summary: "(GFS) [深圳] 2025-06-16 日出 凌晨时次 (UTC+0 2025-06-14 12)",
                        place_holder: "深圳",
                        query_id: "345678",
                        status: "ok",
                        tb_aod: "0.278<br>（还不错）",
                        tb_event_time: "2025-06-16<br>05:45:58",
                        tb_quality: "0.654<br>（中等烧）",
                        time_type: "rise",
                        remark: "明日日出",
                        url: "https://sunsetbot.top/?query_id=345678&intend=select_city&query_city=%E6%B7%B1%E5%9C%B3&event_date=None&event=rise_2&times=None"
                    };
                } else {
                    // 深圳明天日落
                    data = {
                        img_href: "/static/media/map/%E5%8D%8E%E5%8D%97_20250616_set_2025061406z.jpg",
                        img_summary: "(GFS) [深圳] 2025-06-16 日落 傍晚时次 (UTC+0 2025-06-14 06)",
                        place_holder: "深圳",
                        query_id: "901234",
                        status: "ok",
                        tb_aod: "0.189<br>（很好）",
                        tb_event_time: "2025-06-16<br>19:13:12",
                        tb_quality: "0.876<br>（大烧）",
                        time_type: "set",
                        remark: "明日日落",
                        url: "https://sunsetbot.top/?query_id=901234&intend=select_city&query_city=%E6%B7%B1%E5%9C%B3&event_date=None&event=set_2&times=None"
                    };
                }
            }
        }
        
        return {
            statusCode: 200,
            headers,
            body: JSON.stringify(data)
        };
        
    } catch (error) {
        console.error('API错误:', error);
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({
                status: 'error',
                message: '获取数据失败',
                error: error.message
            })
        };
    }
};