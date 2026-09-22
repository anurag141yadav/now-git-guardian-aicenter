import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['41efc4c02bc61610d4dffd74ce91bf16'],
    table: 'sys_analytics_bucket',
    data: {
        analytics_channel: '6496ef61c7001010393d265c95c260b9',
        application_name: 'Alert Visitor Portal',
        bucket_document_id: 'b08f00c02bc61610d4dffd74ce91bf1a',
        bucket_metadata:
            '{"PerformanceDataSamplingRatio":"0.1","ConfigReloadTime":"86400000","SessionTimeout":"14400000","HeartbeatInterval":"15000","MetadataRecordingRatio":"1","IdleTimeout":"1800000","ClientLogsUploadPolicy":"1","AutoDetectScreens":"true","MaxDataPointsPerHeartbeat":"1000"}',
        bucket_table_name: 'sp_portal',
        bucket_type: 'service_portal',
        enable_unauthenticated_user_tracking: 'false',
        enabled: 'true',
        internal_name_for_index: 'x_aleen_snguardian.sp_portal.b08f00c02bc61610d4dffd74ce91bf1a',
    },
})
