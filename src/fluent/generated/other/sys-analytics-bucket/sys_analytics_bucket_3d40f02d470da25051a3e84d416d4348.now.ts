import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['3d40f02d470da25051a3e84d416d4348'],
    table: 'sys_analytics_bucket',
    data: {
        analytics_channel: '6496ef61c7001010393d265c95c260b9',
        application_name: 'Visitor Login Portal',
        bucket_document_id: 'ed10bce9470da25051a3e84d416d4317',
        bucket_metadata:
            '{"PerformanceDataSamplingRatio":"0.1","ConfigReloadTime":"86400000","SessionTimeout":"14400000","HeartbeatInterval":"15000","MetadataRecordingRatio":"1","IdleTimeout":"1800000","ClientLogsUploadPolicy":"1","AutoDetectScreens":"true","MaxDataPointsPerHeartbeat":"1000"}',
        bucket_table_name: 'sp_portal',
        bucket_type: 'service_portal',
        enable_unauthenticated_user_tracking: 'false',
        enabled: 'true',
        internal_name_for_index: 'x_aleen_snguardian.sp_portal.ed10bce9470da25051a3e84d416d4317',
    },
})
