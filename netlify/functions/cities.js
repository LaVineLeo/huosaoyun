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
        // 城市列表数据
        const cities = [
            { name: '深圳', pinyin: 'shenzhen' },
            { name: '北京', pinyin: 'beijing' },
            { name: '上海', pinyin: 'shanghai' },
            { name: '广州', pinyin: 'guangzhou' },
            { name: '杭州', pinyin: 'hangzhou' },
            { name: '成都', pinyin: 'chengdu' },
            { name: '重庆', pinyin: 'chongqing' },
            { name: '西安', pinyin: 'xian' },
            { name: '南京', pinyin: 'nanjing' },
            { name: '武汉', pinyin: 'wuhan' },
            { name: '天津', pinyin: 'tianjin' },
            { name: '苏州', pinyin: 'suzhou' },
            { name: '青岛', pinyin: 'qingdao' },
            { name: '长沙', pinyin: 'changsha' },
            { name: '大连', pinyin: 'dalian' },
            { name: '厦门', pinyin: 'xiamen' },
            { name: '无锡', pinyin: 'wuxi' },
            { name: '福州', pinyin: 'fuzhou' },
            { name: '济南', pinyin: 'jinan' },
            { name: '哈尔滨', pinyin: 'haerbin' },
            { name: '长春', pinyin: 'changchun' },
            { name: '石家庄', pinyin: 'shijiazhuang' },
            { name: '合肥', pinyin: 'hefei' },
            { name: '郑州', pinyin: 'zhengzhou' },
            { name: '南昌', pinyin: 'nanchang' },
            { name: '太原', pinyin: 'taiyuan' },
            { name: '昆明', pinyin: 'kunming' },
            { name: '贵阳', pinyin: 'guiyang' },
            { name: '南宁', pinyin: 'nanning' },
            { name: '海口', pinyin: 'haikou' },
            { name: '三亚', pinyin: 'sanya' },
            { name: '拉萨', pinyin: 'lasa' },
            { name: '乌鲁木齐', pinyin: 'wulumuqi' },
            { name: '银川', pinyin: 'yinchuan' },
            { name: '西宁', pinyin: 'xining' },
            { name: '呼和浩特', pinyin: 'huhehaote' }
        ];
        
        return {
            statusCode: 200,
            headers,
            body: JSON.stringify({
                status: 'ok',
                cities: cities
            })
        };
        
    } catch (error) {
        console.error('获取城市列表错误:', error);
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({
                status: 'error',
                message: '获取城市列表失败',
                error: error.message
            })
        };
    }
};