import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['1484a1972b995250d4dffd74ce91bf20'],
    table: 'sys_analytics_bucket',
    data: {
        analytics_channel: '6496ef61c7001010393d265c95c260b9',
        application_name: 'Visitor Portal',
        bucket_document_id: 'c654a1572b995250d4dffd74ce91bfce',
        bucket_metadata:
            '{"PerformanceDataSamplingRatio":"0.1","ConfigReloadTime":"86400000","SessionTimeout":"14400000","HeartbeatInterval":"15000","MetadataRecordingRatio":"1","IdleTimeout":"1800000","ClientLogsUploadPolicy":"1","AutoDetectScreens":"true","MaxDataPointsPerHeartbeat":"1000"}',
        bucket_table_name: 'sp_portal',
        bucket_type: 'service_portal',
        enable_unauthenticated_user_tracking: 'false',
        enabled: 'true',
        internal_name_for_index: 'x_aleen_snguardian.sp_portal.c654a1572b995250d4dffd74ce91bfce',
    },
})
