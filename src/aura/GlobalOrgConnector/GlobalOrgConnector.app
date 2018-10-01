<aura:application extends="ltng:outApp" access="global">
	<div class="c-container">
		<lightning:layout multipleRows="true">
			<lightning:layoutitem padding="around-small" size="12">
				<c:FileUploadComponent />
			</lightning:layoutitem>
			<lightning:layoutItem padding="around-small" size="12">
				<lightning:layout>
					<lightning:layoutItem padding="around-small" size="4" >
						<div class="page-section page-right">
							<c:UploadHistoryComponent/>
						</div>
					</lightning:layoutItem>
					<lightning:layoutItem padding="around-small" size="8">
						<div class="page-section page-main">
							<c:ExcelDataViewer />
						</div>
					</lightning:layoutItem>
				</lightning:layout>
			</lightning:layoutItem>
		</lightning:layout>
	</div>
</aura:application>