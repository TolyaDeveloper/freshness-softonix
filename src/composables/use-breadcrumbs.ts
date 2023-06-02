export const useBreadcrumbs = (breadcrumbs: IBreadcrumb[]) => {
  const generalStore = useGeneralStore()

  onMounted(() => {
    generalStore.breadcrumbs = [...generalStore.breadcrumbs, ...breadcrumbs]
  })

  onBeforeUnmount(() => {
    generalStore.breadcrumbs = [{ routeName: 'home', title: 'Homepage' }]
  })
}
